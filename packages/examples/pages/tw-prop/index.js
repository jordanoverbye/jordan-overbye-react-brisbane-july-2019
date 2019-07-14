/** @jsx jsx */
import { jsx } from './tw'
import { Fragment } from 'react'

export default function App() {
  return (
    <Fragment>
      <link
        href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <Container>
        <Card>
          <img
            tw={{ w: 'full' }}
            src="https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1460561776/valley-dawn-ElCapitan0416.jpg?itok=viLhgKap"
            alt="El Capitan"
          />
          <div tw={{ px: 6, py: 4 }}>
            <div tw={{ mb: 4 }}>
              <h3
                tw={{
                  mb: 2,
                  font: 'bold',
                  text: ['lg black', 'purple-500', 'pink-500', 'xl green-500']
                }}
              >
                The Coldest Sunset
              </h3>
              <p tw={{ text: 'gray-700 base' }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div tw={{ display: 'flex' }}>
              <Tag isDisabled={true}>#photography</Tag>
              <Tag>#travel</Tag>
              <Tag>#adventure</Tag>
            </div>
          </div>
        </Card>
      </Container>
    </Fragment>
  )
}

function Container(props) {
  return (
    <div
      tw={{
        container: 'default',
        mx: 'auto',
        p: [5, 10]
      }}
      {...props}
    />
  )
}

function Card(props) {
  return (
    <div
      tw={{
        rounded: 'default',
        overflow: 'hidden',
        shadow: ['md', 'lg'],
        maxW: 'sm'
      }}
      {...props}
    />
  )
}

function Tag({ isDisabled, ...props }) {
  return (
    <span
      tw={{
        display: 'inline-block',
        bg: 'gray-200',
        rounded: 'full',
        px: 3,
        py: 1,
        text: 'sm gray-700',
        hover: 'bg-gray-700 text-white',
        font: 'semi-bold',
        mr: 3,
        opacity: isDisabled ? 50 : 100
      }}
      {...props}
    />
  )
}
