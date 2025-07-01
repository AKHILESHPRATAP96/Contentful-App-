export const GET_LANDING_PAGE = `
query GetLandingPage($slug: String!) {
  landingPageCollection(where: {slug: $slug}, limit: 1) {
    items {
      slug
      title
      layoutConfig

      heroBlockCollection {
        items {
          ... on HeroBlock {
            sys { id }
            heading
            subtitle
            cta
            backgroundImage {
              url
              description
            }
          }
        }
      }

      twoColumnRowCollection {
        items {
          ... on TwoColumnRow {
            sys { id }
            heading
            subtitle
            cta
            image {
              url
              description
            }
          }
        }
      }

      imageGridCollection {
        items {
          ... on ImageGrid {
            sys { id }
            imagesCollection {
              items {
                url
                description
              }
            }
          }
        }
      }
    }
  }
}
`;
