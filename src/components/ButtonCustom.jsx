import {Button} from "@chakra-ui/react";

const ButtonCustom = ({title, selected, ...props}) => {
    return (
        <Button
            borderColor='#49B267'
            color={selected ? '#071009' : '#49B267'}
            variant='outline'
            _hover={{ bg: '#69FF93', color: '#071009' }}
            fontSize="14px"
            fontWeight={'semibold'}
            bg={selected ? '#69FF93' : 'unset'}
            {...props}
        >
            {title}
        </Button>
    )
}

export default ButtonCustom;