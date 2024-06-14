import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export const FilmRating = ({ rating }: { rating: number }) => {
  return (
    <Stack spacing={1}>
      <Rating
        name="half-rating-read"
        defaultValue={rating}
        precision={0.5}
        max={10}
        readOnly
      />
    </Stack>
  );
};
