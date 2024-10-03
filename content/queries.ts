import {
  CompaniesLinksQuery,
  CustomerPost,
  HeroQuery,
  SupportLogosQuery,
} from "@/types";
import { GQLFetch } from "./fatch";

export const getCustomerPost = async (slug: string) => {
  const query = `#graphql
    query CustomerPostCollection($where: CustomerPostFilter) {
      customerPostCollection(where: $where) {
        items {
          title
          slug
          customer {
            logo {
              height
              url
              width
              title
            }
            name
          }
          body {
            json
          }
        }
      }
    }
  `;
  const data = await GQLFetch<CustomerPost>({
    query,
    variables: { where: { slug } },
  });

  if (!data) {
    throw new Error("No customer post data found");
  }

  return data;
};

export const getHero = async (draftMode: boolean, tag: string) => {
  const query = `#graphql
    query Query {
      heroCollection(preview: ${draftMode ? "true" : "false"}) {
        items {
          preTitle
          title
          subtitle
          ctaCollection {
            items {
              text
              link
            }
          }
        }
      }
    }
  `;
  const data = await GQLFetch<HeroQuery>({
    query,
    preview: draftMode,
    tags: [tag],
  });

  if (!data) {
    throw new Error("No hero data found");
  }

  return data;
};

export const getSupportLogos = async () => {
  const query = `#graphql
    query Asset($where: AssetFilter) {
      assetCollection(where: $where) {
        items {
          title
          width
          url
          height
        }
      }
    }
  `;
  const data = await GQLFetch<SupportLogosQuery>({
    query,
    variables: { where: { title_contains: "client" } },
  });

  if (!data) {
    throw new Error("No support logos found");
  }

  return data;
};

export const getCustomerLinks = async () => {
  const query = `#graphql
    query CustomerPostCollection {
      customerPostCollection {
        items {
          slug
          customer {
            name
            logo {
              url
              width
              title
              height
            }
          }
        }
      }
    }
  `;
  const data = await GQLFetch<CompaniesLinksQuery>({
    query,
  });

  if (!data) {
    throw new Error("No data found");
  }

  return data;
};
