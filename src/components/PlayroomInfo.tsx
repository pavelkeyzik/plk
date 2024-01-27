interface PlayroomInfoProps {
  title: string;
  description: string;
  codeURL?: string;
  articleURL?: string;
}

function buildLinks(props: PlayroomInfoProps) {
  const links = [];

  if (props.codeURL) {
    links.push(<a href={props.codeURL}>View Code</a>);
  }

  if (props.articleURL) {
    links.push(<a href={props.articleURL}>Read Article</a>);
  }

  return links;
}

function PlayroomInfo(props: PlayroomInfoProps) {
  const links = buildLinks(props);

  return (
    <fieldset title="qweqw">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      {links.map((link, index) => {
        if (index === links.length - 1) {
          return link;
        }

        return (
          <>
            {link}
            <span> | </span>
          </>
        );
      })}
    </fieldset>
  );
}

export type { PlayroomInfoProps };
export { PlayroomInfo };
