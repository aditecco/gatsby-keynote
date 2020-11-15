/* ---------------------------------
types
--------------------------------- */

// gatsby
export interface IGatsbyNode {
  childMarkdownRemark: {
    id: string
    html: string
    frontmatter: Partial<IFrontmatter>
  }
}
export interface IGatsbyInjectedContext {
  pageContext?: {
    node?: IGatsbyNode
  }
}

export interface IGatsbyInjectedQueryData {
  data?: {
    // TODO generic
    allFile?: {
      nodes?: IGatsbyNode[]
    }
  }
}

// project
// export interface ISettings {
//   colors?: {
//     "accent-primary": string
//     "accent-secondary": string
//   }
//   typography?: {
//     font: string
//   }
//   animation?: {
//     transition: string
//   }
//   "asset-urls"?: {
//     "main-logo": string
//     "secondary-logo": string
//   }
// }

export interface ISettings {
  "accent-primary"?: string
  "accent-secondary"?: string
  "main-logo"?: string
  "secondary-logo"?: string
  font?: string
  transition?: string
}

export interface IFrontmatter {
  author: string
  deck: string
  template: string
  timestamp: string
  title: string
  order: number
}
