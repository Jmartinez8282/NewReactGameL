import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import useData from "../hooks/useData";
import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isloading, error } = useGenres();

  return (
    <>
    <Heading fontSize='2xl'>Genres</Heading>
    <List>
      {error && <Text>error 404 not found</Text>}
      {isloading && <Spinner />}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              objectFit='cover'
              src={getCroppedImageUrl(genre.image_background)}
              ></Image>
            <Button
              fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
              color={genre.id === selectedGenre?.id ? "blue.500" : "normal"}
              onClick={() => onSelectGenre(genre)}
              fontSize="100%"
              variant="link"
              >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
      </>
  );
};

export default GenreList;
