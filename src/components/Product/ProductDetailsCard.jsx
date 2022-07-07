import styled from '@emotion/styled';
import {
  Card,
  CardContent,
  Chip,
  Divider,
  Link,
  Stack,
  Typography,
} from '@mui/material';

import AttachmentIcon from '../../resources/icons/attachment.svg';

const List = styled.ul`
  padding: 0 1.25rem;
`;

const ProductDetailsCard = ({ features, attachments, keywords }) => {
  return (
    <Card sx={{ height: 280 }} variant="outlined">
      <CardContent sx={{ p: 1.5, pt: 1 }}>
        <Typography color="primary" fontSize={14} fontWeight={500} gutterBottom>
          DETAILS
        </Typography>
        <Divider />
        <Typography sx={{ mt: 1.5 }} fontSize={13} color="text.secondary">
          Features
        </Typography>
        <List>
          {features &&
            Object.keys(features).map((feat, featIdx) => (
              <li key={featIdx}>
                <Stack direction="row" spacing={1}>
                  <Typography variant="body2" color="text.secondary">
                    {feat}:
                  </Typography>
                  <Typography variant="body2" fontWeight={500}>
                    {features[feat]}
                  </Typography>
                </Stack>
              </li>
            ))}
        </List>
        <Typography sx={{ mt: 1.5 }} fontSize={13} color="text.secondary">
          Attachments
        </Typography>
        <List>
          {attachments &&
            attachments.map((attach, attachIdx) => (
              <li key={attachIdx}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <img src={AttachmentIcon} width={15} height={15} />
                  <Link
                    href={attach.file_link}
                    variant="body2"
                    color="secondary"
                    download
                  >
                    {attach.file_label}
                  </Link>
                </Stack>
              </li>
            ))}
        </List>
        <Typography sx={{ mt: 1.5 }} fontSize={13} color="text.secondary">
          Keywords
        </Typography>
        <Stack direction="row" spacing={1.5}>
          {keywords &&
            keywords.map((keyword, keywordIdx) => (
              <Chip
                key={keywordIdx}
                size="small"
                color="secondary"
                label={keyword}
              />
            ))}
        </Stack>
      </CardContent>
    </Card>
  );
};
export default ProductDetailsCard;
