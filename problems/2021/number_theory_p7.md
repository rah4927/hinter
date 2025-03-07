---
id: fimo_2021_number_theory_p7
year: 2021
number: 7
difficulty: medium
topics: ["number theory"]
source: "IMO 2021 Number Theory Problem 7"
---

Let \(a_{1}, a_{2}, a_{3}, \ldots\) be an infinite sequence of positive integers such that \(a_{n+2 m}\) divides \(a_{n}+a_{n+m}\) for all positive integers \(n\) and \(m\). Prove that this sequence is eventually periodic, i.e. there exist positive integers \(N\) and \(d\) such that \(a_{n}=a_{n+d}\) for all \(n > N\).

---
We will make repeated use of the following simple observation:
Lemma 1. If a positive integer \(d\) divides \(a_{n}\) and \(a_{n-m}\) for some \(m\) and \(n > 2 m\), it also divides \(a_{n-2 m}\). If \(d\) divides \(a_{n}\) and \(a_{n-2 m}\), it also divides \(a_{n-m}\).
Proof. Both parts are obvious since \(a_{n}\) divides \(a_{n-2 m}+a_{n-m}\).
Claim. The sequence \(\left(a_{n}\right)\) is bounded.
Proof. Suppose the contrary. Then there exist infinitely many indices \(n\) such that \(a_{n}\) is greater than each of the previous terms \(a_{1}, a_{2}, \ldots, a_{n-1}\). Let \(a_{n}=k\) be such a term, \(n > 10\). For each \(s < \frac{n}{2}\) the number \(a_{n}=k\) divides \(a_{n-s}+a_{n-2 s} < 2 k\), therefore
\[
a_{n-s}+a_{n-2 s}=k
\]
In particular,
\[
a_{n}=a_{n-1}+a_{n-2}=a_{n-2}+a_{n-4}=a_{n-4}+a_{n-8}
\]
that is, \(a_{n-1}=a_{n-4}\) and \(a_{n-2}=a_{n-8}\). It follows from Lemma 1 that \(a_{n-1}\) divides \(a_{n-1-3 s}\) for \(3 s < n-1\) and \(a_{n-2}\) divides \(a_{n-2-6 s}\) for \(6 s < n-2\). Since at least one of the numbers \(a_{n-1}\) and \(a_{n-2}\) is at least \(a_{n} / 2\), so is some \(a_{i}\) with \(i \leqslant 6\). However, \(a_{n}\) can be arbitrarily large, a contradiction.
Since \(\left(a_{n}\right)\) is bounded, there exist only finitely many \(i\) for which \(a_{i}\) appears in the sequence finitely many times. In other words, there exists \(N\) such that if \(a_{i}=t\) and \(i > N\), then \(a_{j}=t\) for infinitely many \(j\).
Clearly the sequence \(\left(a_{n+N}\right)_{n > 0}\) satisfies the divisibility condition, and it is enough to prove that this sequence is eventually periodic. Thus truncating the sequence if necessary, we can assume that each number appears infinitely many times in the sequence. Let \(k\) be the maximum number appearing in the sequence.
Lemma 2. If a positive integer \(d\) divides \(a_{n}\) for some \(n\), then the numbers \(i\) such that \(d\) divides \(a_{i}\) form an arithmetical progression with an odd difference.
Proof. Let \(i_{1} < i_{2} < i_{3} < \ldots\) be all the indices \(i\) such that \(d\) divides \(a_{i}\). If \(i_{s}+i_{s+1}\) is even, it follows from Lemma 1 that \(d\) also divides \(a_{\frac{i_{s}+i_{s+1}}{2}}\), impossible since \(i_{s} < \frac{i_{s}+i_{s+1}}{2} < i_{s+1}\). Thus \(i_{s}\) and \(i_{s+1}\) are always of different parity, and therefore \(i_{s}+i_{s+2}\) is even. Applying Lemma 1 again, we see that \(d\) divides \(a_{\frac{i_{s}+i_{s+2}}{2}}^{2}\), hence \(\frac{i_{s}+i_{s+2}}{2}=i_{s+1}\),
We are ready now to solve the problem.
The number of positive divisors of all terms of the progression is finite. Let \(d_{s}\) be the difference of the progression corresponding to \(s\), that is, \(s\) divides \(a_{n}\) if and only if it divides \(a_{n+t d_{s}}\) for any positive integer \(t\). Let \(D\) be the product of all \(d_{s}\). Then each \(s\) dividing a term of the progression divides \(a_{n}\) if and only if it divides \(a_{n+D}\). This means that the sets of divisors of \(a_{n}\) and \(a_{n+D}\) coincide, and \(a_{n+D}=a_{n}\). Thus \(D\) is a period of the sequence.
