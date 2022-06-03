import { graphql, useStaticQuery } from "gatsby"

const useAllEvent = () => {
  const {
    allCalendar: { edges },
  } = useStaticQuery(graphql`
    query allEventLinksQuery {
        allCalendar {
            edges {
                node {
                childrenCalendarEvent {
                    id
                    start {
                    dateTime
                    }
                    end {
                    dateTime
                    }
                    summary
                    iCalUID
                }
                }
            }
        }
    }
  `)

  return edges[0].node.childrenCalendarEvent
}

export default useAllEvent
