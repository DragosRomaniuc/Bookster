import React, { FC } from "react";
import { Modal, ScrollView, View } from "react-native";
import styled from "styled-components/native";

import { TermsAndServices } from "constant";
import { Text, Block, Button } from "components";
import { sizes } from "style";

interface Props {
  readonly termsAndServicesModal: boolean;
  readonly toggleTermsAndServicesModal: () => void;
}

const TermsAndService: FC<Props> = ({
  termsAndServicesModal,
  toggleTermsAndServicesModal,
}) => {
  return (
    <Modal animationType="slide" visible={termsAndServicesModal}>
      <Block padding={[sizes.padding * 2, sizes.padding]} space="between">
        <Text h2 light>
          Terms of Service
        </Text>

        <ScrollView style={{ marginVertical: sizes.padding }}>
          {TermsAndServices.map((terms, index) => (
            <RowText
              key={index}
              caption
              gray
              style={{ marginBottom: sizes.base }}
            >
              {terms}
            </RowText>
          ))}
        </ScrollView>

        <Block middle padding={[sizes.base / 2, 0]}>
          <Button gradient onPress={() => toggleTermsAndServicesModal()}>
            <Text center white>
              I understand
            </Text>
          </Button>
        </Block>
      </Block>
    </Modal>
  );
};

const RowText = styled(Text)`
  margin-bottom: ${({ theme }) => theme.sizes.base};
`;

export default TermsAndService;
