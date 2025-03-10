import logo from '../assets/react-core-concepts.png'

const reactDescriptions = ["Fundamental", "Crucial", "Core"]

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function Header() {

  const description = reactDescriptions[getRandomInt(3)]

  return (
    <header>
        <img src={ logo } alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          { description } React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  )
}
