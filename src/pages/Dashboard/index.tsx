import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {Button} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

import {Container, Row, NameText, EmailText, Avatar} from './styles';

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  const navigation = useNavigation();

  const handleLogoff = async () => {
    await auth().signOut();
    navigation.goBack();
  };
  const getCurrentUser = async () => {
    const currentUser = auth().currentUser;
    setUser(currentUser);
  };
  useEffect(() => {
    getCurrentUser();
  }, []);
  return (
    <Container level="1">
      <StatusBar barStyle="light-content" />
      <Row align="center">
        <Avatar source={{uri: user?.photoURL || 'https://i.pravatar.cc/120'}} />
      </Row>
      <Row align="center">
        <NameText>{user?.displayName || ''}</NameText>
      </Row>
      <Row align="center">
        <EmailText>{user?.email || ''}</EmailText>
      </Row>
      <Row>
        <Button
          onPress={handleLogoff}
          status="primary"
          style={{flex: 1}}
          appearance="outline">
          Sair
        </Button>
      </Row>
    </Container>
  );
};
export default Dashboard;
