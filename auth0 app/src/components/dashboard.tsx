import { createStyles, Text, Avatar, Group,Title, TypographyStylesProvider, Paper, Button, Notification } from '@mantine/core';
import { IconCheck } from '@tabler/icons';
import { useState } from 'react';
import Loading from "../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

const useStyles = createStyles((theme) => ({
  comment: {
    padding: `${theme.spacing.lg}px ${theme.spacing.xl}px`,
    width:"30%"
  },
  exploreBtn : {
    alignSelf:'center',
    marginTop:10
  },
  body: {
    paddingLeft: 54,
    paddingTop: theme.spacing.sm,
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.pink[6] : theme.black,
  },
  name: {
    color: theme.colorScheme === 'dark' ? theme.colors.blue[6] : theme.black,
  },

  content: {
    '& > p:last-child': {
      marginBottom: 0,
    },
  },
  title: {
    textAlign: 'center',
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    color: theme.colorScheme === 'dark' ? theme.colors.pink[6] : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    '@media (max-width: 520px)': {
      fontSize: 28,
      textAlign: 'left',
    },
  },
  
  highlight: {
    color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
  },

}));

const CommentHtml =  {
  postedAt : 'Amandeep singh', 
  body: 'you have logged in this is your profile' , 
  author : {
    name: 'Amandeep singh',
    image: 'https://image.lexica.art/full_jpg/928bd3bf-873a-487d-8202-19a395f7a1ff'
    }
}

function Dashboard() {
  const { classes } = useStyles();
  const { user } = useAuth0();
  const [showNotification,setShowNotification] = useState(false);
  return (
    <div>
           <Title className={classes.title}>
          <Text component="span" className={classes.highlight} inherit>
            Your Profile
          </Text>
     
        </Title>
    <div style={{display:'flex', justifyContent:'center', backgroundColor: '#FFB6C1', padding:'40px',margin:'auto', borderRadius: '10px', width: '60%'}}>
    <Paper  withBorder radius="md" className={classes.comment}  style={{backgroundColor: 'rgba(144, 238, 144, 0.5)' }}>
      <Group>
        <Avatar src={CommentHtml.author.image} alt={''} radius="xl" />
        <div>
          <Text className={classes.name} size="sm">{CommentHtml.author.name}</Text>
          <Text size="xs" color="dimmed">
            {CommentHtml.postedAt}
          </Text>
        </div>
      </Group>
      <TypographyStylesProvider className={classes.body}>
        <div className={classes.content} dangerouslySetInnerHTML={{ __html: CommentHtml.body }} />
        <Button onClick={() => {setShowNotification(true)}} className={classes.exploreBtn} size="xs">
            See more
          </Button>
      </TypographyStylesProvider>

      {showNotification && <Notification  onClose={() => {setShowNotification(false)}} className={classes.exploreBtn} icon={<IconCheck size={20} />} title="Wow Glad you're exploring">
        You can have access .
      </Notification>}
      
    </Paper>
          
    </div>
    </div>
  );
}

export default withAuthenticationRequired(Dashboard, {
  onRedirecting: () => <Loading />,
});