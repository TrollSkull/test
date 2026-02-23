export function TwitterFollowCard({ userName, name, isFollowing }) {
    const imageSrc = `https://unavatar.io/${userName}`

    return (
        <article className="tw-follow-card">
            <header className="tw-follow-card-header">
                <img className="tw-follow-card-avatar" src={imageSrc} alt="El avatar de la cuenta" />
                <div className="tw-follow-card-info">
                    <strong className="tw-follow-card-name">{name}</strong>
                    <span className="tw-follow-card-user-name">@{userName}</span>
                </div>
            </header>
            
            <aside>
                <button className={isFollowing ? 'tw-follow-card-button is-following' : 'tw-follow-card-button'}>
                    {isFollowing ? 'Siguiendo' : 'Seguir'}
                </button>
            </aside>
        </article>
    )
}