const Home = () => (
    <div></div>
)

export const getServerSideProps = () => {
    return {
        redirect: {
            destination: '/discover',
            permanent: false
        }
    }
}

export default Home
