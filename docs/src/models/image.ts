import { FixedObject, FluidObject } from 'gatsby-image';
export interface FluidImageSharp {
  childImageSharp: {
    fluid: FluidObject;
  };
}

export interface FixedImageSharp {
  childImageSharp: {
    fixed: FixedObject;
  };
}

export interface ImageSharp {
  childImageSharp: {
    fixed?: FixedObject;
    fluid?: FluidObject;
  };
}
