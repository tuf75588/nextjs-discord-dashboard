import passport from 'passport';
import { Strategy, Profile } from 'passport-discord';

passport.use(
  new Strategy(
    {
      clientID: process.env.APP_ID!,
      clientSecret: process.env.secret!,
      callbackURL: process.env.REDIRECT_URL,
      scope: ['email', 'identify', 'guilds'],
    },
    async (accessToken: string, refreshToken: string, profile: Profile) => {
      console.log('verified!');
    }
  )
);
