---
id: fimo_2007_number_theory_p7
year: 2007
number: 7
difficulty: medium
topics: ["number theory"]
source: "IMO 2007 Number Theory Problem 7"
---

For a prime \(p\) and a positive integer \(n\), denote by \(\nu_{p}(n)\) the exponent of \(p\) in the prime factorization of \(n\) !. Given a positive integer \(d\) and a finite set \(\left\{p_{1}, \ldots, p_{k}\right\}\) of primes. Show that there are infinitely many positive integers \(n\) such that \(d \mid \nu_{p_{i}}(n)\) for all \(1 \leq i \leq k\).

---
For arbitrary prime \(p\) and positive integer \(n\), denote by \(\operatorname{ord}_{p}(n)\) the exponent of \(p\) in \(n\). Thus,
\[
\nu_{p}(n)=\operatorname{ord}_{p}(n !)=\sum_{i=1}^{n} \operatorname{ord}_{p}(i) .
\]
Lemma. Let \(p\) be a prime number, \(q\) be a positive integer, \(k\) and \(r\) be positive integers such that \(p^{k} > r\). Then \(\nu_{p}\left(q p^{k}+r\right)=\nu_{p}\left(q p^{k}\right)+\nu_{p}(r)\).
Proof. We claim that \(\operatorname{ord}_{p}\left(q p^{k}+i\right)=\operatorname{ord}_{p}(i)\) for all \(0 < i < p^{k}\). Actually, if \(d=\operatorname{ord}_{p}(i)\) then \(d < k\), so \(q p^{k}+i\) is divisible by \(p^{d}\), but only the first term is divisible by \(p^{d+1}\); hence the sum is not.
Using this claim, we obtain
\[
\nu_{p}\left(q p^{k}+r\right)=\sum_{i=1}^{q p^{k}} \operatorname{ord}_{p}(i)+\sum_{i=q p^{k}+1}^{q p^{k}+r} \operatorname{ord}_{p}(i)=\sum_{i=1}^{q p^{k}} \operatorname{ord}_{p}(i)+\sum_{i=1}^{r} \operatorname{ord}_{p}(i)=\nu_{p}\left(q p^{k}\right)+\nu_{p}(r) .
\]
For any integer \(a\), denote by \(\bar{a}\) its residue modulo \(d\). The addition of residues will also be performed modulo \(d\), i. e. \(\bar{a}+\bar{b}=\overline{a+b}\). For any positive integer \(n\), let \(f(n)=\left(f_{1}(n), \ldots, f_{k}(n)\right)\), where \(f_{i}(n)=\overline{\nu_{p_{i}}(n)}\).
Define the sequence \(n_{1}=1, n_{\ell+1}=\left(p_{1} p_{2} \ldots p_{k}\right)^{n_{\ell}}\). We claim that
\[
f\left(n_{\ell_{1}}+n_{\ell_{2}}+\ldots+n_{\ell_{m}}\right)=f\left(n_{\ell_{1}}\right)+f\left(n_{\ell_{2}}\right)+\ldots+f\left(n_{\ell_{m}}\right)
\]
for any \(\ell_{1} < \ell_{2} < \ldots < \ell_{m}\). (The addition of \(k\)-tuples is componentwise.) The base case \(m=1\) is trivial.
Suppose that \(m > 1\). By the construction of the sequence, \(p_{i}^{n_{\ell_{1}}}\) divides \(n_{\ell_{2}}+\ldots+n_{\ell_{m}}\); clearly, \(p_{i}^{n_{\ell_{1}}} > n_{\ell_{1}}\) for all \(1 \leq i \leq k\). Therefore the Lemma can be applied for \(p=p_{i}, k=r=n_{\ell_{1}}\) and \(q p^{k}=n_{\ell_{2}}+\ldots+n_{\ell_{m}}\) to obtain
\[
f_{i}\left(n_{\ell_{1}}+n_{\ell_{2}}+\ldots+n_{\ell_{m}}\right)=f_{i}\left(n_{\ell_{1}}\right)+f_{i}\left(n_{\ell_{2}}+\ldots+n_{\ell_{m}}\right) \quad \text { for all } 1 \leq i \leq k,
\]
and hence
\[
f\left(n_{\ell_{1}}+n_{\ell_{2}}+\ldots+n_{\ell_{m}}\right)=f\left(n_{\ell_{1}}\right)+f\left(n_{\ell_{2}}+\ldots+n_{\ell_{m}}\right)=f\left(n_{\ell_{1}}\right)+f\left(n_{\ell_{2}}\right)+\ldots+f\left(n_{\ell_{m}}\right)
\]
by the induction hypothesis.
Now consider the values \(f\left(n_{1}\right), f\left(n_{2}\right), \ldots\) There exist finitely many possible values of \(f\). Hence, there exists an infinite sequence of indices \(\ell_{1} < \ell_{2} < \ldots\) such that \(f\left(n_{\ell_{1}}\right)=f\left(n_{\ell_{2}}\right)=\ldots\) and thus
\[
f\left(n_{\ell_{m+1}}+n_{\ell_{m+2}}+\ldots+n_{\ell_{m+d}}\right)=f\left(n_{\ell_{m+1}}\right)+\ldots+f\left(n_{\ell_{m+d}}\right)=d \cdot f\left(n_{\ell_{1}}\right)=(\overline{0}, \ldots, \overline{0})
\]
for all \(m\). We have found infinitely many suitable numbers.
