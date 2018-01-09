import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
  Form
} from 'semantic-ui-react'

const FixedMenu = () => (
  <Menu fixed='top' size='large' >
    <Container>
    <Menu.Item as='a' active>Home</Menu.Item>
    <Menu.Item as='a'>About Me</Menu.Item>
    <Menu.Item as='a'>Services</Menu.Item>
      <Menu.Menu position='right'>

    <Menu.Item as='a'>Contact</Menu.Item>
      {/* <Button primary size='large'>
        <Icon name='call' />
        Let's Talk
      </Button> */}
      </Menu.Menu>
    </Container>
  </Menu>
)

export default class HomepageLayout extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ visible: false })
  showFixedMenu = () => this.setState({ visible: true })

  calpopup = () => {
    window.Calendly.showPopupWidget('https://calendly.com/timosolo/30min');
  }

  render() {
    const { visible } = this.state

    return (
      <div>
        { visible ? <FixedMenu /> : null }

        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: '100vh', padding: '1em 0em', background:'url(bg.png) no-repeat center bottom', backgroundSize:'cover' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item as='a' active>Home</Menu.Item>
                <Menu.Item as='a'>About Me</Menu.Item>
                <Menu.Item as='a'>Services</Menu.Item>
                <Menu.Item position='right'>
                <Button primary inverted size='huge'>
                  <Icon name='call' />
                  Let's Talk
                </Button>
                </Menu.Item>
              </Menu>
            </Container>

            <Container text>
              <Header
                as='h1'
                inverted
                style={{ fontSize: '1.7em', fontWeight: 'normal', marginBottom: 0, marginTop: '30vh' }}
              >
              Helping Non-profit organisations...
              </Header>
              <Header
                as='h2'
                inverted
                style={{ fontSize: '2em', fontWeight: 'normal', marginBottom: '2em' }}
              >
              ... make a BIGGER impact!
              </Header>
              {/* <Button primary inverted size='huge'>
                <Icon name='call' />
                Let's Talk
              </Button> */}
            </Container>
          </Segment>
        </Visibility>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}>Hi, I'm Timothy</Header>
                <p style={{ fontSize: '1.33em' }}>
                I've been working in the tech startup world for over 10 years, 
                but my passion has always been to help NPO's be more effective by leveraging technology.
                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>Think of me as your on-call&nbsp;<abbr title="Chief Technology Officer" >CTO</abbr></Header>
                <p style={{ fontSize: '1.33em' }}>
                You're focused on real people and real problems. 
                You dont have time to build a website or research social media marketing techniques.
                </p>

                <p style={{ fontSize: '1.33em' }}>
                  Schedule a <b>free</b> call with me and lets see how tech can help you do more.
                </p>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <Image
                  bordered
                  rounded
                  size='large'
                  src='http://timosolo.me/images/me.jpg'
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Button primary  size='huge'>
                  <Icon name='call' />
                  Let's Talk
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment inverted style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header inverted as='h3' style={{ fontSize: '1.33em' }}><i>We really appreciate your help to these surveys and the project as a whole. Indeed you are the "GURU"</i></Header>
                <p style={{ fontSize: '1.33em' }}><b>Brian Mwiya</b> @ <a target="new" href='https://worldrenew.net'>World Renew</a></p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header inverted as='h3' style={{ fontSize: '1.33em' }}><i>Timothy helped us set up our domains and email addresses so we dont communicate with non-professional looking gmail addresses!</i></Header>
                <p style={{ fontSize: '1.33em' }}>
                  <b>David Mendes</b> @ Christ Centred Community
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ paddingBottom: '8em' }} vertical>
          <Container text>
            <Divider
              as='h4'
              className='header'
              horizontal
              style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
              <a href='#'>Services</a>
            </Divider>


            <Header as='h3' style={{ fontSize: '2em' }}>Tech Advisor</Header>
            <p style={{ fontSize: '1.33em' }}>
              A monthly retainer to pick my brain about anything tech related. How can I help you leverage your efforts.
            </p>

            <Header as='h3' style={{ fontSize: '2em' }}>Website Package</Header>
            <p style={{ fontSize: '1.33em' }}>
            Building a website is easy. Really, you can do it yourself for free, but if you want to really make a difference a website can open 100 new doors for your organsiation.
            </p>

            <Header as='h3' style={{ fontSize: '2em' }}>Google Suite (Email, Calendar, Drive etc)</Header>
            <p style={{ fontSize: '1.33em' }}>
            Did you know google gives registered non-profits gsuites for free in many countries (including South Africa)? 
            
            Let me help you register your organisation and show you how to maximise the potential of these essential tools!
            </p>
          </Container>
        </Segment>

        <Segment inverted vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header inverted as='h3'>Schedule a 30 min free call</Header>
                <p>
                  Not sure where to start?<br/>Lets chat about your website and other systems which 
                  can propel your organisation to the next level!
                </p>
                <p>
                  There are no obligations or costs.
                </p>
                <Button inverted primary onClick={this.calpopup}>Schedule a call</Button>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header inverted as='h3'>Email me</Header>
                <p>
                  To ask about my services, and how I can add value to your organisation, please email me and we can discuss in detail.
                </p>
                <Form inverted >
        <Form.Group widths='equal'>
          <Form.Input label='Name' placeholder='Full name' />
          <Form.Input label='Email' placeholder='Email Address' />
        </Form.Group>
        <Form.TextArea label='Message' placeholder='Tell us more about you...' />
        <Form.Button inverted primary >Send Mail</Form.Button>
      </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        {/* <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='About' />
                  <List link inverted>
                    <List.Item as='a'>Sitemap</List.Item>
                    <List.Item as='a'>Contact Us</List.Item>
                    <List.Item as='a'>Religious Ceremonies</List.Item>
                    <List.Item as='a'>Gazebo Plans</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Services' />
                  <List link inverted>
                    <List.Item as='a'>Banana Pre-Order</List.Item>
                    <List.Item as='a'>DNA FAQ</List.Item>
                    <List.Item as='a'>How To Access</List.Item>
                    <List.Item as='a'>Favorite X-Men</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as='h4' inverted>Footer Header</Header>
                  <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment> */}
      </div>
    )
  }
}