---
id: fimo_2009_number_theory_p1
year: 2009
number: 1
difficulty: medium
topics: ["number theory"]
source: "IMO 2009 Number Theory Problem 1"
---

A social club has \(n\) members. They have the membership numbers \(1,2, \ldots, n\), respectively. From time to time members send presents to other members, including items they have already received as presents from other members. In order to avoid the embarrassing situation that a member might receive a present that he or she has sent to other members, the club adds the following rule to its statutes at one of its annual general meetings:
"A member with membership number \(a\) is permitted to send a present to a member with membership number \(b\) if and only if \(a(b-1)\) is a multiple of \(n . "\)
Prove that, if each member follows this rule, none will receive a present from another member that he or she has already sent to other members.
Alternative formulation: Let \(G\) be a directed graph with \(n\) vertices \(v_{1}, v_{2}, \ldots, v_{n}\), such that there is an edge going from \(v_{a}\) to \(v_{b}\) if and only if \(a\) and \(b\) are distinct and \(a(b-1)\) is a multiple of \(n\). Prove that this graph does not contain a directed cycle.

---
Suppose there is an edge from \(v_{i}\) to \(v_{j}\). Then \(i(j-1)=i j-i=k n\) for some integer \(k\), which implies \(i=i j-k n\). If \(\operatorname{gcd}(i, n)=d\) and \(\operatorname{gcd}(j, n)=e\), then \(e\) divides \(i j-k n=i\) and thus \(e\) also divides \(d\). Hence, if there is an edge from \(v_{i}\) to \(v_{j}\), then \(\operatorname{gcd}(j, n) \mid \operatorname{gcd}(i, n)\).
If there is a cycle in \(G\), say \(v_{i_{1}} \rightarrow v_{i_{2}} \rightarrow \cdots \rightarrow v_{i_{r}} \rightarrow v_{i_{1}}\), then we have
\[
\operatorname{gcd}\left(i_{1}, n\right)\left|\operatorname{gcd}\left(i_{r}, n\right)\right| \operatorname{gcd}\left(i_{r-1}, n\right)|\ldots| \operatorname{gcd}\left(i_{2}, n\right) \mid \operatorname{gcd}\left(i_{1}, n\right)
\]
which implies that all these greatest common divisors must be equal, say be equal to \(t\).
Now we pick any of the \(i_{k}\), without loss of generality let it be \(i_{1}\). Then \(i_{r}\left(i_{1}-1\right)\) is a multiple of \(n\) and hence also (by dividing by \(t\) ), \(i_{1}-1\) is a multiple of \(\frac{n}{t}\). Since \(i_{1}\) and \(i_{1}-1\) are relatively prime, also \(t\) and \(\frac{n}{t}\) are relatively prime. So, by the Chinese remainder theorem, the value of \(i_{1}\) is uniquely determined modulo \(n=t \cdot \frac{n}{t}\) by the value of \(t\). But, as \(i_{1}\) was chosen arbitrarily among the \(i_{k}\), this implies that all the \(i_{k}\) have to be equal, a contradiction.
