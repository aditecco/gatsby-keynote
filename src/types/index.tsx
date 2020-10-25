/* ---------------------------------
types
--------------------------------- */

// gatsby
export interface IGatsbyInjectedProps {
  pageContext?: {
    node: {
      childMarkdownRemark: {
        id: string
        html: string
        frontmatter: {
          deck: string
          title: string
          order: number
          template: string
        }
      }
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
