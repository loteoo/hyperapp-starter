declare module '*.css';

import * as React from 'react';

declare module 'react' {
  export interface HTMLAttributes extends React.HTMLAttributes {
    [key: string]: any;
  }
}
