import { Props } from "./RootLayout";

export const ContentBlock = (props: Props) => {
  return <div className="rounded-xl bg-neutral-300 p-10">{props.children}</div>;
};
