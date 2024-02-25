export { default } from "next-auth/middleware";

export const config = {
  // matcher: ["/profile", "/profiletwo", "api/session"],
//   matcher: ["/((?!register|api|login).*)"], 
matcher: ["/profilethree", ],
};


// To protect all pages of your Next.js application with NextAuth, you can simply create a middleware.ts file in your src directory and export the default middleware wrapper provided by NextAuth using the following line of code:

// If you need to protect single or multiple pages, or API routes, you can export a config object with a matcher key. The matcher is an array that can contain the routes you want to protect. In the code below, we added "/((?!register|api|login).*)" to the matcher array. This ensures that any route other than those for the register, login, and api directories will be protected.


// To finalize the setup, navigate to the src/app/profile/page.tsx file and remove the route protection logic, as we are now using the middleware approach for route protection. Once you have logged out, attempt to access the profile page. If successful, you should be redirected to the sign-in page, confirming that the middleware is effectively safeguarding the route.