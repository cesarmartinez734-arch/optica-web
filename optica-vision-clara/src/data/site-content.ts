import type { LucideIcon } from "lucide-react";
import {
  Eye,
  Glasses,
  HeartHandshake,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";

/** Marca y contacto — edita aquí para personalizar toda la landing */
export const SITE = {
  name: "Óptica Visión Clara",
  tagline: "Tu aliado en salud visual",
  topBar:
    "Exámenes visuales y monturas modernas · Atención en San Salvador",
  /** Solo dígitos, con código país, sin + */
  whatsappPhone: "50371234567",
  whatsappDefaultMessage:
    "Hola, quiero agendar un examen visual en Óptica Visión Clara.",
  phoneDisplay: "+503 7123-4567",
  email: "contacto@opticavisionclara.sv",
  addressLine1: "Colonia Escalón, Calle La Reforma 142",
  addressLine2: "San Salvador, El Salvador",
  schedule: "Lun–Sáb: 9:00 a.m. – 6:00 p.m. · Dom: cerrado",
} as const;

export function whatsappHref(message?: string): string {
  const text = message ?? SITE.whatsappDefaultMessage;
  return `https://wa.me/${SITE.whatsappPhone}?text=${encodeURIComponent(text)}`;
}

export const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#productos", label: "Productos" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
] as const;

export const HERO = {
  eyebrow: "Salud visual de confianza",
  title: "Cuida tu visión con estilo y confianza",
  subtitle:
    "Exámenes visuales, lentes graduados, monturas modernas y atención personalizada en un solo lugar.",
  ctaPrimary: "Agenda tu cita por WhatsApp",
  ctaSecondary: "Ver catálogo",
  imageSrc:
    "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=1200&q=85",
  imageAlt: "Persona con gafas elegantes en ambiente luminoso",
} as const;

export const HERO_STATS = [
  { value: "1000+", label: "Clientes atendidos" },
  { value: "10+", label: "Años de experiencia" },
  { value: "500+", label: "Monturas disponibles" },
] as const;

export const ABOUT = {
  title: "Más de una década cuidando tu mirada",
  lead:
    "En Óptica Visión Clara combinamos tecnología de evaluación visual, asesoría cercana y monturas seleccionadas para que veas bien y te sientas seguro en cada detalle.",
  bullets: [
    {
      icon: Eye,
      title: "Exámenes visuales profesionales",
      text: "Protocolos claros y equipos actualizados para medir tu agudeza y salud ocular.",
    },
    {
      icon: Glasses,
      title: "Monturas modernas y de calidad",
      text: "Marcas reconocidas y diseños actuales para trabajo, estudio o día a día.",
    },
    {
      icon: HeartHandshake,
      title: "Atención personalizada",
      text: "Te escuchamos, explicamos opciones y acompañamos la elección de tus lentes.",
    },
    {
      icon: Sparkles,
      title: "Tratamientos en lentes",
      text: "Antirreflejo, filtro azul, fotocromáticos y más, según tu rutina digital.",
    },
  ] satisfies { icon: LucideIcon; title: string; text: string }[],
  imageSrc:
    "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=1000&fit=crop&q=80",
  imageAlt: "Consultorio de optometría moderno y limpio",
  cta: "Hablar con un asesor",
} as const;

export const SERVICES = [
  {
    icon: "Eye" as const,
    title: "Examen visual",
    description:
      "Evaluación completa de agudeza, refracción y recomendaciones para tu rutina visual.",
  },
  {
    icon: "Glasses" as const,
    title: "Lentes graduados",
    description:
      "Cristales monofocales, progresivos y ocupacionales con la mejor óptica para tu prescripción.",
  },
  {
    icon: "CircleDot" as const,
    title: "Lentes de contacto",
    description:
      "Adaptación, hidratación y seguimiento para uso seguro y cómodo cada día.",
  },
  {
    icon: "Shield" as const,
    title: "Tratamientos y protección visual",
    description:
      "Opciones antirreflejo, filtro de luz azul y protección UV para pantallas y sol.",
  },
] as const;

export const PRODUCT_CATEGORIES = [
  {
    title: "Monturas para hombre",
    description:
      "Líneas clásicas y contemporáneas: metal, acetato y combinaciones ligeras.",
    imageSrc:
      "https://opticasoliva.pe/cdn/shop/collections/lentes-para-hombre.webp?v=1714260910",
    imageAlt: "Monturas y gafas de estilo clásico",
  },
  {
    title: "Monturas para mujer",
    description:
      "Diseños finos, colores actuales y siluetas que realzan tu estilo.",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3XHLPaK5FU-EzS3LbNE9NsqVCORyjrywR_w&s",
    imageAlt: "Variedad de monturas y gafas",
  },
  {
    title: "Lentes de sol",
    description:
      "Protección UV certificada con polarizado y tendencias de temporada.",
    imageSrc:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Lentes de sol con protección UV",
  },
  {
    title: "Lentes de contacto",
    description:
      "Diarios, mensuales y tóricos; te guiamos en la mejor opción para ti.",
    imageSrc:
      "https://laverdad.com/wp-content/uploads/2024/05/Claridad-y-confort-en-lentes-de-contacto.jpg",
    imageAlt: "Cuidado y adaptación de lentes de contacto",
  },
] as const;

export const BENEFITS = [
  {
    icon: Users,
    title: "Atención personalizada",
    text: "Equipo humano que explica sin prisas y resuelve dudas sobre tu prescripción.",
  },
  {
    icon: Eye,
    title: "Equipos de evaluación visual",
    text: "Instrumentos calibrados para mediciones precisas y seguimiento confiable.",
  },
  {
    icon: Shield,
    title: "Productos de alta calidad",
    text: "Proveedores auditados y garantías claras en monturas y tratamientos.",
  },
  {
    icon: HeartHandshake,
    title: "Opciones para toda la familia",
    text: "Niños, adultos y mayores: soluciones ajustadas a cada edad y estilo de vida.",
  },
  {
    icon: Glasses,
    title: "Asesoría en monturas",
    text: "Forma de rostro, comodidad y estética para que elijas con seguridad.",
  },
] satisfies { icon: LucideIcon; title: string; text: string }[];

export const TESTIMONIALS = [
  {
    name: "Ricardo Mejía",
    role: "Cliente frecuente · Contador",
    quote:
      "Renové mis progresivos y el trato fue impecable. Me explicaron los tratamientos y salí viendo nítido y cómodo frente a la computadora.",
    rating: 5,
  },
  {
    name: "Gabriela Fuentes",
    role: "Madre de familia",
    quote:
      "Llevé a mis dos hijos al examen visual. El ambiente es tranquilo y profesional; confío plenamente en sus recomendaciones.",
    rating: 5,
  },
  {
    name: "Andrea de León",
    role: "Profesional · Marketing",
    quote:
      "Encontré monturas que combinan con mi trabajo y con el fin de semana. Me ayudaron a elegir sin presión comercial.",
    rating: 5,
  },
  {
    name: "Diego Hernández",
    role: "Universitario",
    quote:
      "Necesitaba lentes con filtro azul para clases online. Precio justo, entrega a tiempo y seguimiento por WhatsApp.",
    rating: 5,
  },
] as const;

export const CTA_FINAL = {
  title: "¿Listo para ver el mundo con más claridad?",
  text: "Agenda tu examen visual, renueva tus lentes o cotiza monturas. Escríbenos y te responderemos lo antes posible.",
  button: "Escribir por WhatsApp",
} as const; 

export const FAQ_ITEMS = [
  {
    q: "¿Necesito cita para el examen visual?",
    a: "Recomendamos agendar para reducir tiempo de espera. Si tienes urgencia, escríbenos y vemos disponibilidad el mismo día.",
  },
  {
    q: "¿Cuánto tardan los lentes graduados?",
    a: "Depende del tipo de cristal y tratamiento; en promedio entre 3 y 7 días hábiles. Te confirmamos plazo al cotizar.",
  },
  {
    q: "¿Trabajan con seguros o empresas?",
    a: "Atendemos convenios seleccionados. Consulta por WhatsApp si tu plan aplica y qué documentación necesitas.",
  },
  {
    q: "¿Puedo traer mi propia fórmula?",
    a: "Sí, si está vigente y legible. De todos modos podemos validarla o recomendar un examen si hace falta actualizarla.",
  },
] as const;

export const FOOTER_SERVICES = [
  "Examen visual",
  "Lentes graduados",
  "Lentes de contacto",
  "Lentes de sol",
  "Tratamientos en cristales",
] as const;
