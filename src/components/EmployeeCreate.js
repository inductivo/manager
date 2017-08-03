import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label:"Name"
            placeholder:"Juan"
          />
        </CardSection>

        <CardSection>
          <Input
            label:"Phone"
            placeholder:"667-37-2334"
          />
        </CardSection>

        <CardSection>
        </CardSection>

        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>

      </Card>
    );
  }
}

export default EmployeeCreate;
