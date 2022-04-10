![nakano](https://i.imgur.com/v9J6lCT.png)

Our domain is nakano.tech from domain.com

Follow our [Twitter account](https://twitter.com/nakano_nft)!

## Inspiration

**School is hard**, especially if you have no one to help you through it. Tutors are an essential part of one's success. 

Meanwhile, the tutors who produce vital teaching content are underpaid, under-engaged, and under-valued thanks to an outdated institutional model. 

We believe all of these problems can be solved by decentralizing teaching content in the same way Bitcoin and Ethereum are decentralizing the financial system

![teachers](https://i.imgur.com/BOFCVbQ.png)

## What it does

**Give power and tools to tutors.** We work DeSo, The Decentralized Social Network to build a platform for tutors to share their material and content, take control of what they post, and have full control over it.

Some of our features:

- **Tipping tutors**: support your tutors and the knowledge they are spreading by social tipping with $nakano coins. Each tip is matched by the Founders' Fund to send to educational charities, such as Teaching America and UNICEF.

- **Outreach**: give tutors tools and a platform to reach students en masse.  We believe we can create an economy of scale around that blockchain that is powerful enough to rival, and ultimately surpass, what the traditional academia giants have created.

- **Independence**: Tutors will have their accounts and spaces to promote their educational content. We can solve a collective action problem among independent publishers by making it individually rational for them to contribute their content to a new globally-shared pool.

![Nakano features](https://i.imgur.com/TC2oiVu.png)

## How we built it

We leveraged the powerful blockchain infrastructure deployed on DeSo's network to build our social platform for tutors. The feeds curated by our tutors and accounts also contribute data back to the public pool of profiles, and posts that are stored on the public chain. We deploy a modified DeSo node to run our platform. 

We also developed a beautiful website designed after the principles of Web 3, so we can welcome our new users to the new age of knowledge sharing and teaching content!

![deso](https://i.imgur.com/V5gH15D.png)

## Challenges we ran into

One of the biggest challenges we ran into was DeSo. The requirement for deploying a single node and doing anything on it requires us to clone the entire public blockchain onto our node's hardware, which amounts to about **400GB of data**. This was a considerable blocker in our project, as we had to wait for the backend node to synchronize with the main network.

Speaking of not only DeSo's technical difficulties, but it was also quite a mountain to climb to get into the level of understanding Deso protocol and how it works, so we can get comfortable. We had to go through the white paper and documentation to acquaint ourselves with it. 

Another big technical challenge was modifying the node to serve our needs, such that it works for our tutor platform. Another challenge was running extensive field research to learn about the underlying problem of underpaid tutors and their benefits.

Our beautiful website built for Nakano was an ongoing challenge, as to adhere to security standards, it was some challenge to perform ACME challenges in a Kubernetes pod in a GCP VM instance, while also saving those certificates in a persistent volume.

## Accomplishments that we're proud of

Getting Kubernetes and ACME challenges to work. Completing our beautiful website with required infographics, and prior done field research. We are proud of getting our hands dirty with Layer-1 blockchain solutions, understanding EC2 contracts, and how they compare to DeSo solutions. We are also very happy with our progress with running high-grade VM instances in GCP with 500GB+ worth of blockchain data running in mounted persistent volumes.

![proud](https://i.imgur.com/kSbUAPW.png)

## What we learned

We learned how to run field research to better understand the problems we are trying to find solutions for. Without repeating everything above, we got a clear understanding of Layer-1 solutions, and how Decentralized Social Network Solutions differ from Decentralized Finance. Deploying a full blockchain node on a custom instance and constantly synchronizing it with the main chain, while also pushing changes. 

## What's next for Nakano: Empower Your Peers

With only 36 hours to spare, we have done everything we possibly could and more! We are happy with our incredible development velocity and how fast we were able to familiarize ourselves with many concepts, technologies, and tools we have never heard of or used. 

The future for Nakano is a full DeSo-protocol compliant core contract modification to fully support the founders' educational charity match. Further down the road, we would have better security built for the domain, the main Nakano node, and invite tutors to try out the system with their students!

![empower](https://i.imgur.com/ttGPmfN.png)