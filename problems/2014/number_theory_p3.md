---
id: fimo_2014_number_theory_p3
year: 2014
number: 3
difficulty: medium
topics: ["number theory"]
source: "IMO 2014 Number Theory Problem 3"
---

A coin is called a Cape Town coin if its value is \(1 / n\) for some positive integer \(n\). Given a collection of Cape Town coins of total value at most \(99+\frac{1}{2}\), prove that it is possible to split this collection into at most 100 groups each of total value at most 1.

---
We will show that for every positive integer \(N\) any collection of Cape Town coins of total value at most \(N-\frac{1}{2}\) can be split into \(N\) groups each of total value at most 1 . The problem statement is a particular case for \(N=100\).
We start with some preparations. If several given coins together have a total value also of the form \(\frac{1}{k}\) for a positive integer \(k\), then we may merge them into one new coin. Clearly, if the resulting collection can be split in the required way then the initial collection can also be split.
After each such merging, the total number of coins decreases, thus at some moment we come to a situation when no more merging is possible. At this moment, for every even \(k\) there is at most one coin of value \(\frac{1}{k}\) (otherwise two such coins may be merged), and for every odd \(k > 1\) there are at most \(k-1\) coins of value \(\frac{1}{k}\) (otherwise \(k\) such coins may also be merged).
Now, clearly, each coin of value 1 should form a single group; if there are \(d\) such coins then we may remove them from the collection and replace \(N\) by \(N-d\). So from now on we may assume that there are no coins of value 1.
Finally, we may split all the coins in the following way. For each \(k=1,2, \ldots, N\) we put all the coins of values \(\frac{1}{2 k-1}\) and \(\frac{1}{2 k}\) into a group \(G_{k}\); the total value of \(G_{k}\) does not exceed
\[
(2 k-2) \cdot \frac{1}{2 k-1}+\frac{1}{2 k} < 1 .
\]
It remains to distribute the "small" coins of values which are less than \(\frac{1}{2 N}\); we will add them one by one. In each step, take any remaining small coin. The total value of coins in the groups at this moment is at most \(N-\frac{1}{2}\), so there exists a group of total value at most \(\frac{1}{N}\left(N-\frac{1}{2}\right)=1-\frac{1}{2 N}\); thus it is possible to put our small coin into this group. Acting so, we will finally distribute all the coins.
