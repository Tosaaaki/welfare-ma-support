exports.getResources = (req, res) => {
  const ebooks = [
    {
      title: '福祉施設M&A完全ガイド',
      description: 'M&Aプロセスの詳細解説と成功のポイント',
      pages: '45',
    },
    {
      title: '事業承継の実務ハンドブック',
      description: '円滑な事業承継のための準備と実践ステップ',
      pages: '38',
    },
  ];

  const webinars = [
    {
      title: '成功する福祉施設M&Aの秘訣',
      date: '2025年2月15日',
      duration: '60分',
      speaker: '山田太郎',
      role: 'M&Aアドバイザー',
    },
    {
      title: '施設評価の重要ポイント',
      date: '2025年1月20日',
      duration: '45分',
      speaker: '佐藤美咲',
      role: '公認会計士',
    },
  ];

  res.json({ ebooks, webinars });
};
