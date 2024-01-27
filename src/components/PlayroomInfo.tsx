interface PlayroomInfoProps {
  title: string;
  description: string;
  codeURL: string;
}

function PlayroomInfo(props: PlayroomInfoProps) {
  return (
    <fieldset title="qweqw">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <a href={props.codeURL}>View Code</a>
    </fieldset>
  );
}

export type { PlayroomInfoProps };
export { PlayroomInfo };
