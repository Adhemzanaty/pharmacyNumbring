import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'tickets/:window',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [
        { window: '1' },
        { window: '2' },
        { window: '3' }
      ];
    },
  },
  {
    path: 'user/:key',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [
        { key: '1' },
        { key: '2' },
        { key: '3' }
      ];
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
