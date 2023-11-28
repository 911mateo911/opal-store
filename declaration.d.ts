/// <reference types="lucia" />

declare namespace Lucia {
  type Auth = import('./app/auth/lucia').Auth;
  type DatabaseUserAttributes = {
    fullName: string;
    created_at: string;
    draftProductId?: string;
    draftProducts: any[]
  };
  type DatabaseSessionAttributes = {};
}

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module "*.svg?url" {
  export default string;
}
