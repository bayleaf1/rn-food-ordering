import { Layout } from './BaseLayout'

export default function LayoutWithGaps({ children }) {
  return <Layout.VisibleArea>{children}</Layout.VisibleArea>
}

LayoutWithGaps.TopSection = ({
  children,
  moreContentTw,
  topSpaceForVerticalPart = Layout.VERTICAL_TOP_SPACE,
  moreContentStyles,
}) => (
  <Layout.SafeArea top left right moreTw={'flex-0'}>
    <Layout.VerticalPart topSpace={topSpaceForVerticalPart} bottomSpace={0} moreTw="flex-grow-0">
      <Layout.HorizontalPart
        leftSpace={Layout.HORIZONTAL_SPACE}
        rightSpace={Layout.HORIZONTAL_SPACE}
        moreTw="flex-grow-0"
      >
        <Layout.Content moreTw={moreContentTw} moreStyles={moreContentStyles}>
          {children}
        </Layout.Content>
      </Layout.HorizontalPart>
    </Layout.VerticalPart>
  </Layout.SafeArea>
)

LayoutWithGaps.Gap = ({ moreContentTw, moreContentStyles, children }) => (
  <Layout.Content moreStyles={moreContentStyles} moreTw={moreContentTw}>
    {children}
  </Layout.Content>
)

LayoutWithGaps.BottomSection = ({ children, contentTw }) => (
  <Layout.SafeArea bottom left right>
    <Layout.VerticalPart topSpace={0} bottomSpace={Layout.VERTICAL_BOTTOM_SPACE}>
      <Layout.HorizontalPart
        leftSpace={Layout.HORIZONTAL_SPACE}
        rightSpace={Layout.HORIZONTAL_SPACE}
      >
        <Layout.Content moreTw={contentTw}>{children}</Layout.Content>
      </Layout.HorizontalPart>
    </Layout.VerticalPart>
  </Layout.SafeArea>
)
