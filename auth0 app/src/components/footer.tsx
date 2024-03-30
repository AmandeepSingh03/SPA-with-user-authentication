import { createStyles, Container, Group, ActionIcon, useMantineTheme } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: '5%',
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontFamily: 'Arial, sans-serif',
    fontSize: theme.fontSizes.sm,

  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    '@media (max-width: 768px)': { // Adjust breakpoint
      flexDirection: 'column',
    },
  },

  links: {
    '@media (max-width: 768px)': { // Adjust breakpoint
      marginTop: theme.spacing.md,
    },
  },
}));

export function Footer() {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
      <p style={{ margin: 0, color: theme.colorScheme === 'dark' ? theme.colors.blue[6] : theme.colors.blue[9] }}>Single Page App</p>
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon size="lg" style={{ fontSize: 25 }}>
            <IconBrandTwitter size={25} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" style={{ fontSize: 25 }}>
            <IconBrandYoutube size={25} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" style={{ fontSize: 25 }}>
            <IconBrandInstagram size={25} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
