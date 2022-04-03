import passport from 'passport';
import { Strategy, Profile } from 'passport-discord';
import { VerifyCallback } from 'passport-oauth2';
passport.use(
  new Strategy(
    {
      clientID: process.env.APP_ID!,
      clientSecret: process.env.APP_SECRET!,
      callbackURL: process.env.REDIRECT_URL,
      scope: ['email', 'identify', 'guilds'],
    },
    async (accessToken: string, refreshToken: string, profile: Profile) => {
      console.log('verified!');
      console.log({ accessToken, refreshToken, profile });
    }
  )
);
