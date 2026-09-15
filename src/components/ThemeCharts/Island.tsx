import { LocaleProvider, type Locale } from '../../lib/i18n';
import { ThemeCharts } from './index';

export default function ThemeIsland({ locale }: { locale: Locale }) {
  return (
    <LocaleProvider locale={locale}>
      <ThemeCharts />
    </LocaleProvider>
  );
}
