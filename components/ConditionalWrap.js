/**
 * Adds a wrapper around children if a condition is true.
 */
export const ConditionalWrap = ({
  condition,
  wrap: Wrap,
  antiWrap: AntiWrap,
  children,
}) => {
  return condition ? (
    <Wrap>{children}</Wrap>
  ) : AntiWrap ? (
    <AntiWrap>{children}</AntiWrap>
  ) : (
    children
  );
};
