interface ButtonProps{
    name: string;
    onClickedButton: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <button type="button" className="btn btn-primary" onClick={() =>{props.onClickedButton()}}>{props.name}</button>
  )
}

export default Button