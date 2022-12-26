// import { auth } from "$lib/server/lucia";
// import { handleHooks } from "@lucia-auth/sveltekit";
// import { redirect } from "@sveltejs/kit";
// import { sequence } from "@sveltejs/kit/hooks";

// export const handle = sequence(handleHooks(auth), async ({ event, resolve }) => {

//     if (event.url.pathname != "/login") {
//         const session = await event.locals.validate();
//         if (!session) throw redirect(302, "/login");
//     }

//     const response = await resolve(event);
//     return response;
// });

import { auth } from "$lib/server/lucia";
import { handleHooks } from "@lucia-auth/sveltekit";

export const handle = handleHooks(auth);
