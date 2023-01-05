/// <reference types="lucia-auth" />
declare namespace Lucia {
  type Auth = import("$lib/server/auth/lucia").Auth;
  type UserAttributes = {
    username: string;
    email: string;
    avatar_url: string;
  };
}

/// <reference types="@sveltejs/kit" />
declare namespace App {
  interface Locals {
    validate: import("@lucia-auth/sveltekit").Validate;
    validateUser: import("@lucia-auth/sveltekit").ValidateUser;
    setSession: import("@lucia-auth/sveltekit").SetSession;
  }
}
