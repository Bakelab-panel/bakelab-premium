import { existsSync } from 'node:fs';
import { join } from 'node:path';

const publicPath = (...parts: string[]) => join(process.cwd(), 'public', ...parts);

export const assets = {
  logo: existsSync(publicPath('images', 'logos', 'logo-claro.png')) ? '/images/logos/logo-claro.png' : undefined,
  icon: existsSync(publicPath('images', 'logos', 'icone-claro.png')) ? '/images/logos/icone-claro.png' : undefined,
  timelapse: existsSync(publicPath('images', 'videos', 'timelapse.mp4')) ? '/images/videos/timelapse.mp4' : undefined
};
