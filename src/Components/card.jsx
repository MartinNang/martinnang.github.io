const Card = ({id, image, name, loop, audio, date, description, link, linkText, tags}) => { 
    return (
        <div key={id} class="card m-2 p-2 bg-dark text-white">
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p class="project-date">Date: {date.getDate()}.{date.getMonth()+1}.{date.getFullYear()}</p>
                <p class="card-text project-description">{description}</p>
                <a href="${link}" target="_blank" class="btn btn-primary repo-button">{linkText}</a>
            </div>
        </div>
    )
}

export default Card;