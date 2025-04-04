"use server"
import 'server-only'
export interface Dictionary {
  home: {
    titulo: string;
    sub1: string;
    sub2: string;
    boton: string;
  };
  sobreMi: {
    titulo: string;
    intro1: string;
    intro2: string;
    parr2_1: string;
    parr2_2: string;
    parr3: string;
  };
  skills: {
    title1: string;
    title2: string;
    title3: string;
  };
  experience: {
    titulo: string;
    parr1: string;
    parr2: string;
    parr3: string;
    parr4: string;
    parr5: string;
  };
  projects: {
    titulo: string;
    tienda: {
      titulo: string;
      parr: string;
    };
    cafeteria: {
      titulo: string;
      parr: string;
    };
    hotel: {
      titulo: string;
      parr: string;
    };
    diodos: {
      titulo: string;
      parr: string;
    };
    carwash: {
      titulo: string;
      parr: string;
    };
    ciclo: {
      titulo: string;
      parr: string;
    };
  };
  header: {
    sobremi: string;
    experiencia: string;
    proyectos: string;
    contacto: string;
  };
  contact: {
    title: string;
    label1: string;
    label2: string;
    label3: string;
    caracter: string;
    button: {
      label1: string;
      label2: string;
    };
    errors: {
      email: {
        required: string;
        invalid: string;
      };
      message: {
        required: string;
        invalid: string;
      };
      asunto: {
        required: string;
        invalid: string;
      };
    };
  };
}
const dictionaries ={
  en: () => import('@/app/i18n/en.json').then((module)=>module.default),
  es: () => import('@/app/i18n/es.json').then((module)=>module.default),
}

const cache = new Map<"en" | "es", Dictionary>();
export const getDictionary = async (locale: 'en' | 'es') => {
  if (cache.has(locale)) return cache.get(locale)
  const dict = await dictionaries[locale]()
  cache.set(locale, dict)
  return dict
}