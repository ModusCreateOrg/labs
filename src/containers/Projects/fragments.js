import { graphql } from 'gatsby';

export const projectFieldsFragment = graphql`
  fragment ProjectFields on ProjectsJson {
    name
    description
    headline
    stack
    tags
    repo
    image
    featured
    weight
    team {
      name
      twitter
    }
  }
`;
