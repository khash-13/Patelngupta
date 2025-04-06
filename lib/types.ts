export interface BlogPostDetailParams {
  params: {
    author: string;
    slug: string;
  };
}
export interface WWDDetailParams {
  params: {
    slug: string;
  };
}

export interface LinkValues {
  id: number;
  head: string;
  href: string;
  pages?: [
    {
      id: number;
      head: string;
      href: string;
    },
    {
      id: number;
      head: string;
      href: string;
    },
  ];
}

export interface ServiceValues {
  id: number;
  title: string;
  description: string;
  icon: string;
  link: string;
  slug: string;
  isDetail: boolean;
  servicesIinclude?: string;
  detail?: {
    id: number;
    para: string;
  }[];
  taxes?: {
    id: number;
    head: string;
    para: string;
  }[];
}

export interface CarouselProps {
  children: React.ReactNode;
  dots?: boolean;
  infinite?: boolean;
  autoplay?: boolean;
  autoplaySpeed?: number;
  pauseOnHover?: boolean;
  slidesToShow?: number;
  arrows?: boolean;
  className?: string;
}
