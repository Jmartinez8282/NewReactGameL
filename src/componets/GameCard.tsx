import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformIconsList from "./PlatformIconsList"
import CriticScore from "./CriticScore"
import getCroppedImageUrl from "../services/image-url"

interface GameProps {
    game: Game
}

const GameCard = ({game}: GameProps) => {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
        <Image src={getCroppedImageUrl(game.background_image)}/>
        <CardBody>

            <Heading fontSize={'2xl'}>{game.name}</Heading>
            <HStack justifyContent={"space-between"}>
            <PlatformIconsList platform={game.parent_platforms.map(p => p.platform)}/>
            <CriticScore score={game.metacritic}/>

            </HStack>
        </CardBody>
    </Card>
  )
}

export default GameCard
