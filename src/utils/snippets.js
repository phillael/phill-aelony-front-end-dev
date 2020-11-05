const snippet1 = `{items.map(json => (
    <Video
      key={json.url}
      title={json.title}
      thumbnail={json.thumb}
      url={json.url}
      views={json.views}
      length={json.length}
      date={json.uploadDate}
    />
  ))}`
