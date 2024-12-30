export interface ImageData {
    path: string;
    caption: string;
    orientTall: boolean;
  }
  
  export interface ProjectCardData {
    id: string;
    title: string;
    subtitle?: string;
    mainImage: string;
    imagesAndCaptions: ImageData[];
    className: string;
  }
  
  export const projectCards: ProjectCardData[] = [
    {
      id: "card1",
      title: "Itzcalli Marie",
      mainImage: "photography/ItzcalliMarie/F1000011.JPG",
      className: "tall-card",
      imagesAndCaptions: [
        { path: 'photography/ItzcalliMarie/000031.JPG', caption: 'Caption 1', orientTall: true },
        { path: 'photography/ItzcalliMarie/F1000005.JPG', caption: 'Caption 2', orientTall: false },
        { path: 'photography/ItzcalliMarie/F1000011.JPG', caption: 'Caption 3', orientTall: false },
      ],
    },
    {
      id: "card2",
      title: "Anna",
      subtitle: "Anna Jean Kos",
      mainImage: "photography/AnnaJeanKos/AJKcaves-33.jpg",
      className: "wide-card",
      imagesAndCaptions: [
        { path: 'photography/AnnaJeanKos/AJKcaves-18.jpg', caption: 'AJKcaves-18.jpg', orientTall: false },
        { path: 'photography/AnnaJeanKos/AJKcaves-40.jpg', caption: 'AJKcaves-40.jpg', orientTall: false },
        { path: 'photography/AnnaJeanKos/AJKcaves-5.jpg', caption: 'AJKcaves-5.jpg', orientTall: false },
      ],
    },
    {
      id: "card3",
      title: "Darling Rooftop NYC",
      mainImage: "photography/DarlingRooftop/Darling-25.jpg",
      className: "tall-card",
      imagesAndCaptions: [
        { path: 'photography/DarlingRooftop/Darling-57.jpg', caption: 'Darling-57.jpg', orientTall: false },
  { path: 'photography/DarlingRooftop/Darling-44.jpg', caption: 'Darling-44.jpg', orientTall: false },
  { path: 'photography/DarlingRooftop/Darling-34.jpg', caption: 'Darling-34.jpg', orientTall: true },
  { path: 'photography/DarlingRooftop/Darling-22.jpg', caption: 'Darling-22.jpg', orientTall: true },
  { path: 'photography/DarlingRooftop/Darling-12.jpg', caption: 'Darling-12.jpg', orientTall: false },
  { path: 'photography/DarlingRooftop/Darling-5.jpg', caption: 'Darling-5.jpg', orientTall: false },
  { path: 'photography/DarlingRooftop/Darling-53.jpg', caption: 'Darling-53.jpg', orientTall: false },
  { path: 'photography/DarlingRooftop/Darling-25.jpg', caption: 'Darling-25.jpg', orientTall: true },
        
      ],
    },
    {
      id: "card4",
      title: "Estelle Ines",
      subtitle: "Towa & Janessa Leone",
      mainImage: "photography/EstelleInes/Towa-21.jpg",
      className: "tall-card",
      imagesAndCaptions: [
        { path: "photography/EstelleInes/Towa-3.jpg", caption: "Towa-3.jpg", orientTall: true },
        { path: "photography/EstelleInes/Towa-14.jpg", caption: "Towa-14.jpg", orientTall: true },
        { path: "photography/EstelleInes/Towa-16.jpg", caption: "Towa-16.jpg", orientTall: false },
        { path: "photography/EstelleInes/Towa-19.jpg", caption: "Towa-16.jpg", orientTall: false },
        { path: "photography/EstelleInes/Towa-28.jpg", caption: "Towa-28.jpg", orientTall: true },
        { path: "photography/EstelleInes/Towa-43.jpg", caption: "Towa-43.jpg", orientTall: true },
        { path: "photography/EstelleInes/Towa-48.jpg", caption: "Towa-48.jpg", orientTall: true },
        { path: "photography/EstelleInes/Towa-66.jpg", caption: "", orientTall: true },
        { path: "photography/EstelleInes/Towa-75.jpg", caption: "", orientTall: true },
        { path: "photography/EstelleInes/Towa-77.jpg", caption: "", orientTall: true },
        { path: "photography/EstelleInes/Towa-79.jpg", caption: "", orientTall: true },
        { path: "photography/EstelleInes/Towa-21.jpg", caption: "", orientTall: true },


      ],
    },
  ];
  