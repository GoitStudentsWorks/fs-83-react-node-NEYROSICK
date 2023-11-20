import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { selectUser } from "../redux/auth/authSelectors";
// import { EmptyPetsList } from "../EmptyPetsList/EmptyPetsList";
// import { Pagination } from "../../../Pagination/Pagination";
import {
    PetsList,
    PetsCardContainer,
    PetsCardText,
    PetsCardImg,
    PetsDataTitle,
    // PetsCardIcon,
} from "./PetsData.styled";

export const PetsData = () => {
    // const user = useSelector(selectUser);
    // const pets = user?.pets;

    // const [page, setPage] = useState(1);
    const [currentPets, setCurrentPets] = useState([{ name: 'Jack', date: '22.04.2018', type: 'Persian cat', comments: "Jack is a gray Persian cat with green eyes.He loves to be pampered and groomed, and enjoys playing with toys.Although a bitshy, he's a loyal and affectionate lap cat", file: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSutFe12GiEdUvTno_bjd-8KnM0m2TaQwst9zoV6vjJG5HDkg065mCUGW7SSUBkcYgRAhc&usqp=CAU' },
        {
            name: 'Jack', date: '22.04.2018', type: 'Persian cat', comments: "Jack is a gray Persian cat with green eyes.He loves to be pampered and groomed, and enjoys playing with toys.Although a bitshy, he's a loyal and affectionate lap cat", file: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403'
        }]);

    // const handlePageChange = (selectedPage) => {
    //     setPage(selectedPage);
    // };

    // useEffect(() => {
    //     if (pets) {
    //         const startIndex = (page - 1) * 2;
    //         const endIndex = startIndex + 2;
    //         const petsSlice = pets.slice(startIndex, endIndex);
    //         setCurrentPets(petsSlice);
    //     }
    // }, [page, pets]);

    return (
        <div>
            <PetsDataTitle>My pets:</PetsDataTitle>
            <PetsList  >
                {currentPets && currentPets.map((el) => (
                    <PetsCardContainer key={el._id}>
                        <PetsCardImg src={el.file} alt="default" />
                        <ul>
                            <PetsCardText>
                                <h3>Name: </h3>
                                <p>{el.name}</p>
                            </PetsCardText>
                            <PetsCardText>
                                <h3>Date of birth: </h3>
                                <p>{el.date}</p>
                            </PetsCardText>
                            <PetsCardText>
                                <h3>Type: </h3>
                                <p>{el.type}</p>
                            </PetsCardText>
                            <PetsCardText>
                                <h3> Comments: </h3>
                                <p>{el.comments}</p>
                            </PetsCardText>
                        </ul>
                    </PetsCardContainer>
                ))}
            </PetsList>

            {/* {pets?.length === 0 && <EmptyPetsList />} */}
{/* 
            <Pagination
                onPageChange={handlePageChange}
                currentPage={page}
                perPage={2}
                totalItems={pets?.length}
            /> */}
        </div>
    );
};