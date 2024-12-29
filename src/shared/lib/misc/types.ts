export type SVGComponent = React.FC<React.SVGAttributes<SVGElement>>;

/**
 * Замена конструкции <P = {}>, на которую жалуется eslint
 */
export type AnyObject = Record<string, unknown>;

/**
 * FC with Children. С 18 реакта FC не добавляет пропс children
 */
export type FCC<P = AnyObject> = React.FC<React.PropsWithChildren<P>>;

export type WithClassName = {
  className?: string;
}
