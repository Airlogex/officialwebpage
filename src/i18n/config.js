
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome to AirLogex',
      subtitle: 'Your Trusted Partner in Global Logistics',
      airFreight: 'Air Freight',
      groundShipping: 'Ground Shipping',
      expressDelivery: 'Express Delivery',
      trackShipment: 'Track Shipment',
      contact: 'Contact',
    }
  },
  es: {
    translation: {
      welcome: 'Bienvenido a AirLogex',
      subtitle: 'Su Socio de Confianza en Logística Global',
      airFreight: 'Carga Aérea',
      groundShipping: 'Envío Terrestre',
      expressDelivery: 'Entrega Express',
      trackShipment: 'Rastrear Envío',
      contact: 'Contacto',
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
