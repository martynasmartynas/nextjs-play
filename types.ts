import { Document } from "@contentful/rich-text-types";

export type CustomerPost = {
  customerPostCollection: {
    items: {
      title: string;
      slug: string;
      customer: {
        logo: {
          height: number;
          url: string;
          width: number;
          title: string;
        };
        name: string;
      };
      body: {
        json: Document;
      };
    }[];
  };
};

export type HeroQuery = {
  heroCollection: {
    items: {
      preTitle: string;
      title: string;
      subtitle: string;
      ctaCollection: {
        items: {
          text: string;
          link: string;
        }[];
      };
    }[];
  };
};

export type SupportLogosQuery = {
  assetCollection: {
    items: {
      title: string;
      width: number;
      url: string;
      height: number;
    }[];
  };
};

export type CompaniesLinksQuery = {
  customerPostCollection: {
    items: {
      slug: string;
      customer: {
        name: string;
        logo: {
          url: string;
          width: number;
          title: string;
          height: number;
        };
      };
    }[];
  };
};
